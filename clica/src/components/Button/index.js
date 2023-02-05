import './Button.css'

const Button = (props) =>{
    const mudaBtn = (e) =>{
        if(props.resp){
            props.func(true)
        }else{
            e.target.style.position = 'absolute'
            e.target.style.top = Math.random() * window.innerHeight - 60 + 'px'
            e.target.style.right = Math.random() * window.innerWidth - 60 + 'px'

            props.func(false)
        }

      }
    return(
        <>
            <button onMouseEnter={mudaBtn} onClick={mudaBtn}>{props.children}</button>
        </>
    )
}


export default Button