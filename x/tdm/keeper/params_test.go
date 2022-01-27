package keeper_test

import (
	"testing"

	testkeeper "github.com/lockp111/tdm/testutil/keeper"
	"github.com/lockp111/tdm/x/tdm/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.TdmKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
