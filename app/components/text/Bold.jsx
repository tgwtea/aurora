import Text from "./Text";

export default function Bold({ children, className }) {
  return (
    <Text className={`${className ?? ""} font-bold`}>
      {children}
    </Text>
  );
}