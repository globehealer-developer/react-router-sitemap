import React from 'react';
import { Route, Redirect } from 'react-router';

export default (
	<Route>
		<Route path='/' />
		<Route path='/access_treatment' />
		<Route path='/confirmation' />
		<Route path='/confirmation_link_expired' />
		<Route path='/confirm_account'>
			<Route path=':token' />
		</Route>
		<Route path="/document_manager" />
    <Route path='/user'>
      <Route path=':guid'>
        <Route path='edit' />
        <Route path='change_password' />
      </Route>
    </Route>
		<Route path="/document_manager" />
		<Route path="/error" />
		<Route path="/error_no_case_manager" />
		<Route path="/forgot_password" />
		<Route path="/hipaa_privacy_notice" />
		<Route path="/hospitals">
      <Route path="/access_treatment">
        <Route path="/:hospitalId" />
      </Route>
    </Route>
		<Route path="/login" />
		<Route path="/logout" />
    <Route path='/patient'>
      <Route path='/:guid'>
        <Route path='/cases' />
        <Route path='/case'>
          <Route path="/:caseId" />
        </Route>
      </Route>
    </Route>
    <Route path="/my_patients" />
		<Route path="/password_reset">
      <Route path="/:token" />
    </Route>
		<Route path="/user">
      <Route path="/:guid">
        <Route path="/payments" />
        <Route path="/dashboard" />
        <Route path="/case">
          <Route path="/:caseId">
            <Route path="/pay" />
          </Route>
        </Route>
      </Route>
    </Route>
		<Route path='/emr'>
      <Route path="/:guid">
        <Route path="/pay" />
      </Route>
    </Route>
    <Route path="/payment_confirmation" />
    <Route path="/privacy_policy" />
    <Route path="/sign_up" />
    <Route path="/sign_up_emr" />
    <Route path="/sign_up_provider" />
    <Route path="/terms_of_service" />
		<Redirect from='/' to='/' />
		<Route path='*' />
	</Route>
);
