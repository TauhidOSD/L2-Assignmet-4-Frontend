import { useGetBorrowSummaryQuery } from "../features/book/bookApi";

const BorrowSummary = () => {
  const { data, isLoading, error } = useGetBorrowSummaryQuery();

  if (isLoading) return <p className="text-center mt-10">Loading summary...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load summary.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">📊 Borrow Summary</h2>
      <table className="w-full bg-white border rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">ISBN</th>
            <th className="py-2 px-4 border">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: number) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{item.title}</td>
              <td className="py-2 px-4 border">{item.isbn}</td>
              <td className="py-2 px-4 border text-center">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
