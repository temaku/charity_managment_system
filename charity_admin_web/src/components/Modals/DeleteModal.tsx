type Props = {
  deleteMessage: string;
  deleteDescription: string;
  buttonText: string;
  onDelete: () => void;
};
const DeleteModal = (props: Props) => {
  return (
    <div>
      <div className="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
        <div className="flex pb-3 items-center">
          <div className="-ml-1 text-gray-600 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={7} x2={20} y2={7} />
              <line x1={10} y1={11} x2={10} y2={17} />
              <line x1={14} y1={11} x2={14} y2={17} />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pl-2">
            {props.deleteMessage}
          </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 pb-3 font-normal">
          {props.deleteDescription}
        </p>
        <button
          onClick={props.onDelete}
          className="focus:outline-none bg-red-400 transition duration-150 ease-in-out hover:bg-red-500 rounded text-white px-3 py-2 text-xs"
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};
export default DeleteModal;
