import CategoryItem from "entities/category-item";
import { Card, CardBody } from "features/core-components/card";
import PlanComponent from "features/plan-component/plan-component";
import planMockData from "mock-data/plan-data";
import { ReactElement } from "react";

const Container = (): ReactElement => {
  const hasChildCategories = planMockData.categories.filter((o1) =>
    planMockData.notes.some((o2) => o1.id === o2.categoryId)
  ); //show the categories that has child note
  const allData: CategoryItem[] = planMockData.categories;
  const filteredData = allData.filter((f) => f.parentNoteCategoryId !== null); //filter data to find subCategories
  allData.forEach((element: CategoryItem, index: number) => {
    if (hasChildCategories.find((c) => c === element)) {
      allData[index].subCategories = filteredData.find((c) => c === element)
        ? planMockData.categories.filter((x) => x.id === element.id)[0]
        : undefined;
      allData[index].note = planMockData.notes.filter(
        (x) => x.categoryId === element.id
      )[0];
    }
  });
  const sortedData = allData
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .filter((s) => s.isArchived !== true); //sort alldata alphabetically and then filtered archieved data

  return (
    <Card className="m-5 w-80">
      <CardBody>
        <PlanComponent plan={planMockData.PLAN} allCategories={sortedData} />
      </CardBody>
    </Card>
  );
};
export default Container;
