
import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 flex-none w-14 sm:w-20 h-screen">
      <div className="h-20 items-center flex">
        <HomeIcon width={35} className="text-gray-200 left-3 sm:left-6 fixed" />
      </div>
      <div className="fixed left-3 sm:left-6 top-[100px]">
        <ChartBarIcon
          width={40}
          className="bg-gray-700 p-2 rounded-lg mb-4 text-blue-200"
        />
        <DocumentSearchIcon
          width={40}
          className="bg-gray-700 p-2 rounded-lg mb-4 text-gray-200"
        />
        <MailIcon
          width={40}
          className="bg-gray-700 p-2 rounded-lg mb-4 text-gray-200"
        />
        <CreditCardIcon
          width={40}
          className="bg-gray-700 p-2 rounded-lg mb-4 text-gray-200"
        />
        <BellIcon
          width={40}
          className="bg-gray-700 p-2 rounded-lg mb-4 text-gray-200"
        />
      </div>
      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-700 p-2 rounded-lg mb-4 text-gray-200"
          />
        </a>
        <ExternalLinkIcon
          width={40}
          className="bg-gray-700 p-2 rounded-lg mb-4 text-gray-200"
        />
      </div>
    </div>
  );
};

export default Sidebar;