/** PriceItem — one line of the tabela pública. The open price is a brand
 *  differential: render it plainly, no asterisks, no "a partir de". */
export function PriceItem({
  label,
  detail,
  price,
}: {
  label: string;
  detail?: string;
  price: string;
}) {
  return (
    <div className="jc-price-item" data-reveal="rise">
      <span className="jc-price-item__main">
        <span className="jc-price-item__label">{label}</span>
        {detail && <span className="jc-price-item__detail">{detail}</span>}
      </span>
      <span className="jc-price-item__dash" aria-hidden="true" />
      <span className="jc-price-item__price">{price}</span>
    </div>
  );
}
