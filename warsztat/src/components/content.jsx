export default function Content({children, title, w}) {

    if (w == null) w="w-4/5";

    return (
        <div className={`  ${w}  m-auto bg-white rounded-lg shadow-xl`}>
            <div className="p-8">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600 mb-4">
                    {title}
                </h4>
                    {children}
            </div>
        </div>
    );
  };