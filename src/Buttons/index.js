import "./style.css"

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {
    if (tasks.lenght === "") {
        return null;
    }

    return (
        <div className="containerButtons">
            <button onClick={toggleHideDone} className="containerButtons__button">
              {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>

            <button 
            onClick={setAllDone}
            className="containerButtons__button"
            disabled={tasks.every(({ done }) => done)}
            >
            Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;