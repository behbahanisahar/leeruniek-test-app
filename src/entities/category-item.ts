import NoteItem from "./note-item";

export default interface CategoryItem {
  id: number;
  isArchived: boolean;
  name: string;
  parentNoteCategoryId: number | null;
  groupPlanId: number;
  note?: NoteItem;
  subCategories?: CategoryItem;
}
