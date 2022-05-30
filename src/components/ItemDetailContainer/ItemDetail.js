import Item from "../Item/Item"

const ItemDetail = ({ productos }) => {
    return (
        <div className="d-flex justify-content-center" >Lista
            {
                productos.map((p) => {
                    return (
                        <Item product={p} key={p.id} />

                    )
                })
            }

        </div>
    )
}

export default ItemDetail;