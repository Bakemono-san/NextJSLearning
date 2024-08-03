export default function detailList({params}: {params: {index:string}}) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-white">detail page {params.index}</h1>
      </main>
    );
  }
  