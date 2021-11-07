import React from "react";
import s from "../Paginator/Paginator.module.css"

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageHandler: (p: number) => void
}

function Paginator(props: PaginatorPropsType) {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {
                                     props.setCurrentPageHandler(p)
                                 }}> |{p}| </span>
                })
            }
            ...
            <span className={props.currentPage === pagesCount ? s.selectedPage : ""}
                  onClick={(e) => {
                      props.setCurrentPageHandler(pagesCount)
                  }}> |{pagesCount}| </span>
        </div>
    )
}

export default Paginator