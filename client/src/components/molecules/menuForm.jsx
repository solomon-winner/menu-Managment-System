import Input from "../atoms/input.js";

const menuForm = () => {
    return (
        <div className="mt-10 md:mt-0">
            <Input
            label={"MenuID"}
            type={"text"}
            placeholder={"5632e09f-6e16-71e6-a70a-722afefde4e9"}
            name={"MenuID"}
            id={"MenuID"}
            />
            <Input
            label={"Depth"}
            type={"number"}
            placeholder={3}
            name={"Depth"}
            id={"Depth"}
            />
            <Input
            label={"ParentData"}
            type={"text"}
            placeholder={"Systems"}
            name={"ParentData"}
            />
            <Input
            label={"Name"}
            type={"text"}
            placeholder={"System Code"}
            name={"Name"}
            />
            <button className="bg-[#253BFF] text-white p-2 mt-4 rounded-2xl w-[20rem]">Save</button>
        </div>
    )
}

export default menuForm;