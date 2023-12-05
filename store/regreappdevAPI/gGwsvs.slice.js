import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ggwsv_list = createAsyncThunk(
  "gGwsvs/api_v1_ggwsv_list",
  async payload => {
    const response = await apiService.api_v1_ggwsv_list(payload)
    return response.data
  }
)
export const api_v1_ggwsv_create = createAsyncThunk(
  "gGwsvs/api_v1_ggwsv_create",
  async payload => {
    const response = await apiService.api_v1_ggwsv_create(payload)
    return response.data
  }
)
export const api_v1_ggwsv_retrieve = createAsyncThunk(
  "gGwsvs/api_v1_ggwsv_retrieve",
  async payload => {
    const response = await apiService.api_v1_ggwsv_retrieve(payload)
    return response.data
  }
)
export const api_v1_ggwsv_update = createAsyncThunk(
  "gGwsvs/api_v1_ggwsv_update",
  async payload => {
    const response = await apiService.api_v1_ggwsv_update(payload)
    return response.data
  }
)
export const api_v1_ggwsv_partial_update = createAsyncThunk(
  "gGwsvs/api_v1_ggwsv_partial_update",
  async payload => {
    const response = await apiService.api_v1_ggwsv_partial_update(payload)
    return response.data
  }
)
export const api_v1_ggwsv_destroy = createAsyncThunk(
  "gGwsvs/api_v1_ggwsv_destroy",
  async payload => {
    const response = await apiService.api_v1_ggwsv_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gGwsvsSlice = createSlice({
  name: "gGwsvs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_ggwsv_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ggwsv_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ggwsv_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ggwsv_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ggwsv_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ggwsv_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ggwsv_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ggwsv_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_ggwsv_list,
  api_v1_ggwsv_create,
  api_v1_ggwsv_retrieve,
  api_v1_ggwsv_update,
  api_v1_ggwsv_partial_update,
  api_v1_ggwsv_destroy,
  slice: gGwsvsSlice
}
