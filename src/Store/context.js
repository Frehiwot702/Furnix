import { createContext, useState } from "react";
import { furniture } from "./Data";

export const ProductContext = createContext()

export const likeCount = furniture.filter((item) => item.isLiked == true).length
