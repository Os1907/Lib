import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
import AddUser from "./AddUser";

const fetchData = async () => {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};
const Home = () => {

// 1️⃣ useQuery بتجلب البيانات تلقائيًا بمجرد أن يتم render الكومبوننت.
// 2️⃣ queryKey: ["products"] بتحدد اسم الكاش، عشان الكود يعرف يخزن البيانات في المكان الصحيح.
// 3️⃣ queryFn: fetchData بتحدد الدالة المسؤولة عن جلب البيانات من الـ API.
// 4️⃣ isLoading بيكون true أثناء عملية جلب البيانات، ويمكن استخدامه لعرض رسالة تحميل.
// 5️⃣ error بيحتوي على أي خطأ يحدث أثناء جلب البيانات، ويمكن استخدامه لعرض رسالة خطأ.
// 6️⃣ data بيحتوي على البيانات التي تم جلبها من الـ API، ويتم استخدامها لعرضها في الواجهة.

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });


  if (isLoading) return <Loading message="Loading..."/> ;
  if (error) return <p>Failed to fetch users : {error.message}</p>;

  return <>
<div className="rounded-xl bg-blue-950 min-h-screen p-10 m-10 ">
{/* <ul>
      {data.map((product:any) => (
        // <li key={product.id}>{product.name}</li>
      ))}
    </ul> */}
    <ProductGrid data={data}/>
    <AddUser/>
</div>


  </>
}

export default Home



const Loading = ({ message }: { message: string }): ReactElement => (
  <div className="rounded-xl bg-blue-950 min-h-screen grid place-items-center text-white text-5xl ">
    <p>{message}</p>
  </div>
);





const ProductGrid = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <img
              src={product.imageCover}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.description.substring(0, 50)}...</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                {product.priceAfterDiscount && (
                  <span className="text-sm text-gray-500 line-through">${product.priceAfterDiscount}</span>
                )}
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-500">{"★".repeat(Math.round(product.ratingsAverage))}</span>
                <span className="text-gray-500 ml-2">({product.ratingsQuantity})</span>
              </div>
              <div className="mt-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
