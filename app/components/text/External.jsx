export default function External({ href, children }) {
  return (
    <a href={href} target="_blank" className="hover:underline">{children}</a>
  );
}