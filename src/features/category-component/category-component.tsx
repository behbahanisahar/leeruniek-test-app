import { Accordion, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryItem from "entities/category-item";
import { ReactElement, useState } from "react";
import CategoryAcardionContent from "./category-acardion-content";

interface Props {
  category: CategoryItem;
}

const CategoryAcardionComponent = ({ category }: Props): ReactElement => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = (): void => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Accordion
        style={{ margin: "5%" }}
        expanded={
          category?.note !== undefined || category?.subCategories !== undefined //if the component doesn't have children should'nt be expanded
            ? expanded
            : false
        }
        onChange={() => handleChange()}
      >
        <AccordionSummary
          expandIcon={
            category?.note !== undefined ||
            category?.subCategories !== undefined ? (
              <ExpandMoreIcon />
            ) : null
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="text-primary">{category.name}</Typography>
        </AccordionSummary>

        <CategoryAcardionContent category={category} />
      </Accordion>
    </>
  );
};
export default CategoryAcardionComponent;
