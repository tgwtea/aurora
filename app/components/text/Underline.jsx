import Text from "./Text";

export default function Underline({ children, className }) {
  return (
    <Text className={`${className ?? ""} underline`}>
      {children}
    </Text>
  );
}