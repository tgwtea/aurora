import { useContext, useEffect, useRef } from "react";
import { MobileContext } from "../contexts/MobileContext";
import { Button, cn, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Input } from "@heroui/react";
import { Bot, Plane } from "lucide-react";
import removeMd from "remove-markdown";
import reactStringReplace from "react-string-replace";
import { nanoid } from "nanoid";
import { useLocale } from "../contexts/LocaleContext";

export default function ChatDrawer() {
  const {
    chatIsOpen,
    chatOnOpenChange,
    chatMessages,
    chatInput,
    chatHandleInputChange,
    chatHandleSubmit
  } = useContext(MobileContext);

  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.constants.chatbot");

  const end_of_messages_ref = useRef(null);

  useEffect(() => {
    if (end_of_messages_ref.current) end_of_messages_ref.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <>
      <Drawer isOpen={chatIsOpen} onOpenChange={chatOnOpenChange} size="full" classNames={{ wrapper: "h-auto", base: "my-auto" }} shouldBlockScroll={false}>
      <DrawerContent>
        {(chatOnClose) => (
          <>
            <DrawerHeader>
              <span className="flex items-center gap-4">
                <Bot />
                {getTranslation("title")}
              </span>
            </DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col gap-4 text-sm items-end montserrat font-bold">
                {chatMessages.map((m) => {
                  const content = removeMd(m.content);

                  return (
                    <div key={m.id ?? nanoid()} className={`p-4 rounded-xl w-fit ${(m.role == "user") ? "bg-gray-400 dark:bg-gray-600 rounded-tl-4xl rounded-bl-4xl text-right" : "bg-blue-400 dark:bg-blue-600 rounded-tr-4xl rounded-br-4xl"}`}>
                      <span>{reactStringReplace(content, "\n", (m, i) => {
                        if ((i + m.length + 1) == content.length) return "";
                        else return (
                          <br key={nanoid()} />
                        );
                      })}</span>
                    </div>
                  );
                })}
                <div ref={end_of_messages_ref}></div>
              </div>
            </DrawerBody>
            <DrawerFooter>
              <form className="flex items-center gap-4 w-full" onSubmit={chatHandleSubmit}>
                <Input disableAnimation placeholder={getTranslation("placeholder")} onChange={chatHandleInputChange} value={chatInput} classNames={{
                  input: cn("text-[16px]")
                }} />
                <Button type="submit"> <Plane /> </Button>
              </form>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
    </>
    
  );
}