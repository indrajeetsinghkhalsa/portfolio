const PageSection = (props) => {
    return(
        <section className = {`page-section ${props.className} p-3 p-lg-5`}>
            {props.body}
        </section>
    );
}

export default PageSection;