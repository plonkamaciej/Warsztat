export default function Content({children, title}) {


    return (
        <div className=" w-4/5 m-auto bg-white rounded-lg shadow-xl">
            <div className="p-8">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600 mb-4">
                    {title}
                </h4>
                    {children}
            </div>
        </div>
    );
  };