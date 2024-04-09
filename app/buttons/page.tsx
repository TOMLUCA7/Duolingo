import { Button } from "@/components/ui/button";

function ButtonsPage() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>default</Button>
      <Button variant={"primary"}>primary</Button>
      <Button variant={"primaryOutline"}>primary outline</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"secondaryOutline"}>secondary outline</Button>
      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>danger outline</Button>
      <Button variant={"supre"}>supre</Button>
      <Button variant={"supreOutline"}>supre outline</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"sideBar"}>side bar</Button>
      <Button variant={"sideBarOutline"}>side bar outline</Button>
    </div>
  );
}

export default ButtonsPage;
