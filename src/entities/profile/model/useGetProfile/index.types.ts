// 타입들
export type OwnerData = {
  ownerImage: string | null;
  ownerName: string | null;
  folderName: string | null;
};

export type FolderData = {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
    links: Array<{
      id: number;
      createdAt: string;
      url: string;
      title: string;
      description: string;
      imageSource: string;
    }>;
    count: number;
  };
};
