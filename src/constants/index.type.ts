export type avatarData = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
};
export interface LinkListProps {
  id: number;
  created_at: string;
  updated_at?: string;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
}
export interface Item {
  id: number;
  createdAt: string;
  updated_at?: string;
  url: string;
  title?: string;
  description?: string;
  imageSource?: string;
  folder_id?: number;
}
