import { useContext } from "react";
import { MobileContext } from "../contexts/MobileContext";
import { Button } from "@heroui/react";
import { Bot } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

export default function ChatButton() {
  const { chatOnOpen, chatAppend, chat_preprompt_made, setChatPrepromptMade } = useContext(MobileContext);

  const { useTranslation } = useLocale();

  const getTranslation = useTranslation("mobile.constants.chatbot");

  return (
    <div className="footer pr-6 pb-6">
      <Button className="rounded-full" color="success" onPress={(...args) => {
        chatOnOpen(...args);

        if (!chat_preprompt_made) chatAppend({
          role: "user",
          content: getTranslation("prompt")
        }).then(() => {
          setChatPrepromptMade(true);
        });
      }}><Bot /></Button>
    </div>
  );
}