import { useIntl } from "react-intl";

function Footer() {
  const { formatMessage } = useIntl();
  const copyrightLabel =
    formatMessage({ id: "copyright" }).charAt(0).toUpperCase() +
    formatMessage({ id: "copyright" }).slice(1);
  return (
    <footer className=' py-8'>
      <div className='container mx-auto flex items-center justify-between flex-wrap'>
        <div className='w-1/2 text-center text-gray-700 text-sm'>
          {copyrightLabel} 2023 &copy; le.nez
        </div>
      </div>
    </footer>
  );
}

export default Footer;
