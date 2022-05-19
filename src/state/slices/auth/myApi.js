import { createAsyncThunk } from '@reduxjs/toolkit';
import martApi from '../../api/baseApi';

//

export const fetchuser = createAsyncThunk('post/fetchuser', async (payload) => {
    console.log(payload);
    const data = await martApi.post(
        '/view/627123624c7636d7863c7e75/brands/62725cb9cf8718ee5daba127',
        {
            email: 'stephen',
        },
        {
            headers: {
                token: 'Holla eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wSUQiOiI2MjcxMjM2MjRjNzYzNmQ3ODYzYzdlNzUiLCJpYXQiOjE2NTE3ODE2MzksImV4cCI6MTY1MTk5NzYzOX0.MolXfica5YF3nEToF-M5g0LaSCF6zSucJYny8Zaqkn8',
            },
        }
    );
    return data;
});
