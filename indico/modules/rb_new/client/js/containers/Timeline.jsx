/* This file is part of Indico.
 * Copyright (C) 2002 - 2018 European Organization for Nuclear Research (CERN).
 *
 * Indico is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * Indico is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Indico; if not, see <http://www.gnu.org/licenses/>.
 */

import {connect} from 'react-redux';

import {stateToQueryString} from 'redux-router-querystring';

import Timeline from '../components/Timeline';
import {resetBookingState, fetchRoomDetails} from '../actions';
import {pushStateMergeProps} from '../util';
import {queryString as queryStringSerializer} from '../serializers/filters';


const mapStateToProps = ({bookRoom, roomDetails}) => ({
    ...bookRoom.timeline,
    recurrenceType: bookRoom.filters.recurrence.type,
    queryString: stateToQueryString(bookRoom, queryStringSerializer),
    roomDetails
});

const mapDispatchToProps = dispatch => ({
    resetBookingState: () => {
        dispatch(resetBookingState());
    },
    fetchRoomDetails(id) {
        dispatch(fetchRoomDetails(id));
    },
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    pushStateMergeProps
)(Timeline);
