import { IFoodsTypes } from "../../../@types/IFoodsTypes";

export interface IModalEditFoodProps {
    isOpen: boolean;
    editingFood: IFoodsTypes;
    setIsOpen: () => void;
    handleUpdateFood: (food: IFoodsTypes) => void;
}