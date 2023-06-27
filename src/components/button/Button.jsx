import React, { useEffect } from 'react';
import { Ripple, initTE } from 'tw-elements';

function Button(prop) {
  const { label, cb } = prop;

  useEffect(() => initTE({ Ripple }));

  return (
    <div className="flex justify-end">
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="inline-block rounded bg-teal px-6 pb-2 pt-2.5 label-xs font-medium uppercase leading-normal label-white shadow-[0_4px_9px_-4px_#3bcaa8] transition duration-150 ease-in-out hover:bg-teal-500 hover:shadow-[0_8px_9px_-4px_rgb(59 202 168 / 30%),0_4px_18px_0_rgb(59 202 168 / 20%)] focus:bg-teal-500 focus:shadow-[0_8px_9px_-4px_rgb(59 202 168 / 30%),0_4px_18px_0_rgb(59 202 168 / 20%)] focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-[0_8px_9px_-4px_rgb(59 202 168 / 30%),0_4px_18px_0_rgb(59 202 168 / 20%)] dark:shadow-[0_4px_9px_-4px_rgb(59 202 178 / 50%)] dark:hover:shadow-[0_8px_9px_-4px_rgb(59 202 168 / 20%),0_4px_18px_0_rgb(59 202 164 / 20%)] dark:focus:shadow-[0_8px_9px_-4px_rgb(59 202 168 / 20%),0_4px_18px_0_rgb(59 202 164 / 20%)] dark:active:shadow-[0_8px_9px_-4px_rgb(59 202 168 / 20%),0_4px_18px_0_rgb(59 202 164 / 20%)] bg-teal-500 text-zinc-100 mt-8"
        onClick={() => cb()}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
