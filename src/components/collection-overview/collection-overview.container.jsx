import { connect } from 'react-redux';
import { createStructuredSelector} from "reselect";
import {compose} from "redux";

import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;

