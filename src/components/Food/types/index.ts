import { IFoodsTypes } from "../../../@types/IFoodsTypes";

export interface IFoodsProps {
    food: IFoodsTypes;
    handleDelete: (id: number) => void;
    handleEditFood: (food: IFoodsTypes) => void;
}

export interface IFoodStyle {
    readonly available: boolean;
}