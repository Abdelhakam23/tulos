import { data } from "@/constants";

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-b gap-8">
      {data?.map((item, index) => (
        <div
          key={index}
          className="group flex items-center gap-3 transition-colors hover:bg-gray-50 p-4"
        >
          {item.icon}
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-darkColor transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
