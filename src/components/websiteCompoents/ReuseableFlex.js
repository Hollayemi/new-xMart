import Header from './Header';
const SearchWrapper = (props) => {
    return (
        <section className="bg-slate-50">
            <div className="md:h-24"></div>
            <Header />
            {props.children}
        </section>
    );
};

export default SearchWrapper;
