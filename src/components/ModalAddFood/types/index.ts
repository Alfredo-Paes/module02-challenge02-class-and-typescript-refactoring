import { IFoodsTypes } from "../../../@types/IFoodsTypes";

export interface IModalAddFoodProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (food: IFoodsTypes) => void;
}