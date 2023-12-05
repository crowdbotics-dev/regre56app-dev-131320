import axios from "axios"
const regreappdevAPI = axios.create({
  baseURL: "https://regre56app-dev-131320.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_ggwsv_list(payload) {
  return regreappdevAPI.get(`/api/v1/ggwsv/`)
}
function api_v1_ggwsv_create(payload) {
  return regreappdevAPI.post(`/api/v1/ggwsv/`, payload)
}
function api_v1_login_create(payload) {
  return regreappdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return regreappdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return regreappdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return regreappdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return regreappdevAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return regreappdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return regreappdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return regreappdevAPI.post(`/rest-auth/logout/`)
}
function api_v1_ggwsv_retrieve(payload) {
  return regreappdevAPI.get(`/api/v1/ggwsv/${payload.id}/`)
}
function api_v1_ggwsv_update(payload) {
  return regreappdevAPI.put(`/api/v1/ggwsv/${payload.id}/`, payload)
}
function api_v1_ggwsv_partial_update(payload) {
  return regreappdevAPI.patch(`/api/v1/ggwsv/${payload.id}/`, payload)
}
function api_v1_ggwsv_destroy(payload) {
  return regreappdevAPI.delete(`/api/v1/ggwsv/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return regreappdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return regreappdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return regreappdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return regreappdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return regreappdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return regreappdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
export const apiService = {
  api_v1_ggwsv_list,
  api_v1_ggwsv_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  api_v1_ggwsv_retrieve,
  api_v1_ggwsv_update,
  api_v1_ggwsv_partial_update,
  api_v1_ggwsv_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create
}
