export interface RepositoryItem{
  url: string
  description: string
}

export interface RepositoriesProps {
  repositories: RepositoryItem[];
}

export const Repositories = ({ repositories = [] }: RepositoriesProps) => {
  const goRepository = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="grid grid-cols-3">
      {repositories.map(({description, url}, i) => (
        <div
          className="mb-[30px] cursor-pointer text-center flex flex-col gap-[5px]"
          key={i}
          onClick={() => goRepository(url)}
        >
          <p className="text-md text-black-300 py-[20px]">Rep0{i+1}.</p>
          <p className="text-md text-white-100">{description}</p>
          <p className="text-sm text-black-300">{url}</p>
        </div>
      ))}
    </div>
  );
};
