import { AccordionDetails } from "@material-ui/core";
import CategoryItem from "entities/category-item";
import { ReactElement } from "react";

interface Props {
  category: CategoryItem;
}

const CategoryAcardionContent = ({ category }: Props): ReactElement => {
  return (
    <>
      {category.note && category.subCategories && (
        <AccordionDetails className="d-block">
          <h3 >note:{category.note.content}</h3>

          <h4 >sub category:{category.subCategories.name}</h4>
          {category.subCategories?.note && (
            <h5 className="text-muted">sub category note: {category.subCategories?.note.content}</h5>
          )}
        </AccordionDetails>
      )}
      {!category.note && category.subCategories && (
        <AccordionDetails className="d-block">
          <h4 >sub category:{category.subCategories.name}</h4>
          {category.subCategories.note && (
            <h5 className="text-muted">sub category note: {category.subCategories?.note.content}</h5>
          )}
        </AccordionDetails>
      )}
      {category.note && !category.subCategories && (
        <AccordionDetails className="d-block">
          <h3>note:{category.note.content}</h3>
        </AccordionDetails>
      )}
    </>
  );
};
export default CategoryAcardionContent;
