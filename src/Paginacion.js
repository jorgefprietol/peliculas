export default function Paginacion(props) {

    const getPaginas = () => {
        const resultado = [];
        for (let i = 0; i < props.total; i++) {
            let pagina = i + 1;
            resultado.push(
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a onClick={() => props.onChange(pagina)}
                  className={props.pagina === pagina ? 'active' : ''}>
                    {pagina}
                </a>
            );
        }
        return resultado;
    }

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>Página {props.pagina} de {props.total}:</span>
        
        {getPaginas()}
      
      </div>
    </div>
  );
}
