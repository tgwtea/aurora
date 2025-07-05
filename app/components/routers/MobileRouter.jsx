import { useContext, useEffect } from "react";
import { MobileContext } from "../contexts/MobileContext";
import MobileSexSurvey from "../pages/mobile/MobileSexSurvey";
import MobileSymptomsSurvey from "../pages/mobile/MobileSymptomsSurvey";
import MobileScan from "../pages/mobile/MobileScan";
import MobileResults from "../pages/mobile/MobileResults";
import MobileSplash from "../pages/mobile/MobileSplash";
import MobilePrivacy from "../pages/mobile/MobilePrivacy";
import MobileDataHandling from "../pages/mobile/MobileDataHandling";

export default function MobileRouter() {
  const { current_page, setTotalPages, show_privacy_notice } = useContext(MobileContext);

  const pages = [
    <MobileSplash />,
    <MobilePrivacy />,
    <MobileSexSurvey />,
    <MobileSymptomsSurvey />,
    <MobileScan />,
    <MobileResults />
  ];

  useEffect(() => {
    setTotalPages(pages.length); // to avoid going further
  }, []);

  const privacy_notice = <MobileDataHandling />

  const page = pages[current_page];

  return (show_privacy_notice) ? privacy_notice : page;
}