export default function Footer() {
  return (
    <footer className="pb-0 pt-3 text-sm text-gray-500 dark:text-gray-500 lg:pb-0">
      <p>
        &copy; {new Date().getFullYear() + ' '}Aaron Finnil&auml;
      </p>
    </footer>
  );
}
