import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { ReactElement } from "react";
import logo from "assets/img/Leeruniek-logo.png";
import CategoryItem from "entities/category-item";
import planItem from "entities/plan-item";
import CategoryComponent from "features/category-component/category-component";

interface Props {
  plan: planItem;
  allCategories: CategoryItem[];
}

const PlanComponent = ({ plan, allCategories }: Props): ReactElement => {
  return (
    <>
      <Card style={{ width: "70%", margin: "5% 10%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: "40%" }}
            image={logo}
            alt="Leeruniek App"
          />
          <CardContent className="mx-5">
            <h3 className="h5">{plan.name}</h3>
            <h4 className="text-muted">{plan.userCreated}</h4>
          </CardContent>
          <hr />
          <div>
            {allCategories?.map((c, i) => (
              <CategoryComponent category={c} key={i} />
            ))}
          </div>
        </CardActionArea>
      </Card>
    </>
  );
};
export default PlanComponent;
