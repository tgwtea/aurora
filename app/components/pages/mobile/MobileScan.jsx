import { Button, Progress } from "@heroui/react";
import { ArrowRight, Camera, Frame, User } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import AnimatedDiv from "../../misc/AnimatedDiv";
import ScreenPreviousButton from "../../buttons/ScreenPreviousButton";
import SettingsDrawerButton from "../../buttons/SettingsDrawerButton";
import SettingsDrawer from "../../misc/SettingsDrawer";
import { MobileContext } from "../../contexts/MobileContext";
import { BreakpointsContext } from "../../contexts/BreakpointsContext";
import ChatDrawer from "../../misc/ChatDrawer";
import ChatButton from "../../buttons/ChatButton";
import EndSpacing from "../../misc/EndSpacing";
import classNames from "classnames";
import { useLocale } from "../../contexts/LocaleContext";

export default function MobileScan() {
  const { current_page, setCurrentPage, total_pages } = useContext(MobileContext);
  const { calculateVPStyles } = useContext(BreakpointsContext);
  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.scan");
  const getConstantTranslation = useTranslation("constants");

  const [camera_online, setCameraOnline] = useState(false);
  const [back_camera, setBackCamera] = useState(true);
  const [is_scanning, setIsScanning] = useState(false);
  const [scan_progress, setScanProgress] = useState(false);

  const video_ref = useRef(null);

  async function stopCameraStream() {
    return new Promise(async (resolve) => {
      if (video_ref.current?.srcObject) {
        const tracks = video_ref.current.srcObject.getTracks();

        tracks.forEach((t, i) => {
          t.stop();

          if (i == (tracks.length - 1)) {
            video_ref.current.srcObject = null;

            resolve();
          }
        });
      } else resolve();
    });
  }

  async function initializeCameraStream(facing_mode) {
    if (navigator?.mediaDevices && navigator?.mediaDevices?.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (stream.active) stream.getTracks().forEach((t) => t.stop());

      const devices = await navigator.mediaDevices.enumerateDevices();
      const video_devices = await devices.filter((d) => d.kind == "videoinput");

      const usable_device = video_devices.find((d) => {
        const environment_reg = /back|rear|environment/i;
        const user_reg = /front|user/i;
        
        return ((facing_mode == "environment") ? environment_reg : user_reg).test(d.label);
      }) || video_devices[0];

      video_ref.current.srcObject = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: usable_device.deviceId
        }
      });

      if (!camera_online) setCameraOnline(true);
    }
  }

  const is_done = (scan_progress && scan_progress >= 100);
  const can_go_next = (is_done && !video_ref.current?.srcObject);

  useEffect(() => {
    (async function () {
      await stopCameraStream();
    })();
  }, [is_done]);

  useEffect(() => {
     if (can_go_next && current_page < total_pages) setCurrentPage((c) => c + 1);
  }, [can_go_next]);

  return (
    <AnimatedDiv className={(is_done) ? "hidden" : ""}>
      <div className={calculateVPStyles({
        tiny: "pt-10 pr-10 pl-10",
        small: classNames({
          "pt-10 pr-10 pl-10": camera_online
        }),
        default: "header p-10"
      })}>
        <div className="flex items-center justify-between">
          <ScreenPreviousButton labeled extra={stopCameraStream} />
          <SettingsDrawerButton />
        </div>
      </div>
      <div className={`flex items-center justify-center ${calculateVPStyles({
        tiny: classNames({
          "pr-10 pl-10 pt-8": camera_online,
          "h-[100dvh] pb-30 p-10": !camera_online
        }),
        default: `h-[100dvh]  ${calculateVPStyles({
          small: classNames("pr-10 pl-10 ", {
            "pt-10": !is_scanning && !is_done,
            "pb-15": is_scanning && !is_done
          }),
          default: "p-10"
        })}`
      })}`}>
        <div className="flex flex-col">
          {(!camera_online) ? (
            <>
              <span className="text-2xl">{getTranslation("start")}</span>
              <div className="mt-4">
                  <Button color="secondary" onPress={() => initializeCameraStream((back_camera) ? "environment" : "user")}>{getTranslation("request")} <Camera/></Button>
              </div>
            </>
          ) : (is_scanning && !is_done) ? (
            <span className="text-xl text-center">{getTranslation("scanning")}</span>
          ) : (!is_scanning) ? (
            <span className="text-xl text-center">{getTranslation("prescan")}</span>
          ) : ""}
          {(!can_go_next) ? (
            <div className="grid place-items-center mt-4">
              <div className={`relative w-full max-w-[15rem] rounded-3xl ${(!camera_online) ? "hidden invisible" : ""}`} style={{
                aspectRatio: "9 / 16"
              }}>
                <video ref={video_ref} autoPlay className="rounded-3xl top-0 left-0 w-full h-full object-cover" />
                <img src="/cover.png" alt={getConstantTranslation("alts.overlay")} className="absolute top-0 left-0 w-full h-full" />
              </div>
            </div>
          ) : ""}
          {(camera_online && !is_scanning) ? (
            <div className="mt-4 text-center">
              <div>
                <Button color={(back_camera) ? "secondary" : "danger"} onPress={async () => {
                  const new_bc_state = !back_camera;

                  await stopCameraStream();

                  setBackCamera(new_bc_state);
                  initializeCameraStream((new_bc_state) ? "environment" : "user");
                }}>{getTranslation("camera")(back_camera)} {(back_camera) ? <User /> : <Frame />}</Button>
              </div>
              <div className="mt-2">
                <Button color={"success"} onPress={() => {
                  setIsScanning(true);

                  window.scrollTo(0, 0);

                  const max = 15, min = 5;

                  setInterval(() => {
                    if (scan_progress <= 100) setScanProgress((prog) => (prog ?? 0) + (Math.random() * (max - min) + min));
                  }, 1000); // TODO: fix to 1000
                }}>{getTranslation("init")} <ArrowRight /></Button>
              </div>
            </div>
          ) : ""}
          {(is_scanning && !is_done) ? (
            <div className="flex flex-col gap-2 mt-4 text-center">
              <Progress isStriped value={(scan_progress <= 100) ? scan_progress : 100} aria-label={getTranslation("progress", " ")} />
            </div>
          ) : ""}
          <EndSpacing />
          <EndSpacing />
        </div>
      </div>
      <SettingsDrawer />
      <ChatDrawer />
      <ChatButton />
    </AnimatedDiv>
  );
}