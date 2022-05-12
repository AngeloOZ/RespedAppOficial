import { ItemMenu } from "./ItemMenu";
import styled from "styled-components";

const Categorias = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  ul {
    max-width: 450px;
    padding: 0;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    li {
      list-style: none;
      padding: 0;
      margin: 0;
      text-transform: capitalize;
      padding: 10px 15px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 0 1px 0.5px #8d8d87;
      transition: 0.2s ease;
      &.active,
      &:hover {
        background-color: #ec4d20;
        box-shadow: 0 0 1px 0.5px #ec4d20;
      }
    }
  }
  @media (max-width: 476px) {
    padding: 0;
    ul {
      width: 100%;
      justify-content: center;
      li {
        margin: 5px 10px;
        padding: 10px 10px;
      }
    }
  }
`;

export const Menu = () => {
  return (
    <>
      <main className="container-fluid px-md-5 my-3">
        <Categorias>
          <ul>
            <li className="active">Todas</li>
            <li>Carnes</li>
            <li>Parrilla</li>
            <li>Postres</li>
            <li>Bebidas</li>
          </ul>
        </Categorias>
        <div className="row g-5">
          <div className="col-12  col-md-6">
            <ItemMenu></ItemMenu>
          </div>
          <div className="col-12  col-md-6">
            <ItemMenu></ItemMenu>
          </div>
          <div className="col-12  col-md-6">
            <ItemMenu></ItemMenu>
          </div>
          <div className="col-12  col-md-6">
            <ItemMenu></ItemMenu>
          </div>
        </div>
      </main>
    </>
  );
};
