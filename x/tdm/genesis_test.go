package tdm_test

import (
	"testing"

	keepertest "github.com/lockp111/tdm/testutil/keeper"
	"github.com/lockp111/tdm/testutil/nullify"
	"github.com/lockp111/tdm/x/tdm"
	"github.com/lockp111/tdm/x/tdm/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TdmKeeper(t)
	tdm.InitGenesis(ctx, *k, genesisState)
	got := tdm.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
