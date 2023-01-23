import { FormattedMessage } from "react-intl";
import Form from "../Form";

function Main() {
  return (
    <section className='flex'>
      <div className='w-3/4'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 font-michroma'>
          <FormattedMessage id='welcome' />
        </h1>
        <Form />
        <p className='text-gray-600 mb-8 font-michroma'>
          <FormattedMessage id='mainContent' />
        </p>
      </div>
    </section>
  );
}

export default Main;
