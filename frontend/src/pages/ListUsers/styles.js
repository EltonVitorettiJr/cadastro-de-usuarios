import styled from "styled-components";

export const UsersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    flex-wrap: wrap;
    height: 400px;
    overflow-y: auto;
    border-radius: 16px;
    padding: 15px;
    align-content: flex-start;

    &:hover {
        border: 1px solid #fff;
        transition: .5s;
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;

        &:hover {
            border: none;
        }
    }
`

export const CardUsers = styled.div`
    box-sizing: border-box;
    background-color: #252d48;
    padding: 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 300px;
    height: 100px;
    
    h3 {
        color: #fff;
        font-size: 22px;
        text-transform: capitalize;
    }

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 300;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;

    &:hover {
       opacity: .8;
       transition: .5s;
    }


`