export function LongText({ txt, length }) {

    return <div className="long-text">{txt.slice(0, length)} {length < 100 ? '' : '...'} </div>

}