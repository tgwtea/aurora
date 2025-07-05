import Text from "./Text";

export default function Colored({ children, color }) {
  return (
    <Text className={color}>
      {children}
    </Text>
  );
}