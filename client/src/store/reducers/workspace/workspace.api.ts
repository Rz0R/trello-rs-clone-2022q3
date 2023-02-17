import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SERVER_URL } from '../../../const/const';
import { getToken } from '../../../services/token';
import { IBoard } from '../../../types/board';
import { IWorkspace } from '../../../types/workspace';

type BoardCreationData = { workspaceId: string; title: string };

type WorkspaceCreationData = {
  title: string;
  avatarColor?: string;
  description?: string;
  avatarImage?: string;
  private?: boolean;
  websiteAddress?: string;
};

type WorkspaceUpdatingData = {
  workspaceId: string;
  title?: string;
  avatarColor?: string;
  description?: string;
  avatarImage?: string;
  private?: boolean;
  websiteAddress?: string;
};

type WorkspaceDeletionResponse = {
  message: string;
};

export const workspaceApi = createApi({
  reducerPath: 'workspacesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Workspace'],
  endpoints: (builder) => ({
    getAllWorkspaces: builder.query<IWorkspace[], void>({
      query: () => '/workspaces',
      providesTags: ['Workspace'],
    }),
    createWorkspace: builder.mutation<IWorkspace, WorkspaceCreationData>({
      query: (body) => ({
        url: '/workspaces',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Workspace'],
    }),
    updateWorkspace: builder.mutation<IWorkspace, WorkspaceUpdatingData>({
      query: (body) => ({
        url: '/workspaces',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Workspace'],
    }),
    deleteWorkspace: builder.mutation<WorkspaceDeletionResponse, string>({
      query: (id) => ({
        url: `/workspaces/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Workspace'],
    }),
    createBoard: builder.mutation<IBoard, BoardCreationData>({
      query: (body) => ({
        url: '/boards',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Workspace'],
    }),
  }),
});

export const {
  useGetAllWorkspacesQuery,
  useCreateWorkspaceMutation,
  useUpdateWorkspaceMutation,
  useDeleteWorkspaceMutation,
  useCreateBoardMutation,
} = workspaceApi;