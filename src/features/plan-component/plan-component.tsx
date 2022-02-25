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

interface Props {
  plan: planItem;
  allCategories: CategoryItem[];
}

const PlanComponent = ({ plan, allCategories }: Props): ReactElement => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            // height="140"
            image={logo}
            alt="green iguana"
          />
          <CardContent className="mx-5">
            <div className="h5">{plan.name}</div>
            <span className="text-muted">{plan.userCreated}</span>
          </CardContent>
          <hr />
          <div>
            {allCategories?.map((c, i) => (
              <div></div>
            ))}
          </div>
        </CardActionArea>
      </Card>
    </>
  );
};
export default PlanComponent;
